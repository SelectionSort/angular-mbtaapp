import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Traintrip} from '../common/traintrip';
import {Observable, interval} from 'rxjs';
import {map, startWith, flatMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TraintripService {

  private baseUrl = 'https://api-v3.mbta.com/predictions?&filter%5Bdirection_id%5D=0&filter%5Broute_type%5D=2&include=stop%2Ctrip%2Croute%2Cschedule';

  southAPI = this.baseUrl + '&filter%5Bstop%5D=place-sstat'
  northAPI = this.baseUrl + '&filter%5Bstop%5D=place-north'


  constructor(private httpClient: HttpClient) {
  }

  // fetch data from MBTA API and extract data
  getTraintripList(terminal: string = this.southAPI): Observable<Traintrip[]> {
    return this.httpClient.get<GetResponse>(terminal)
      .pipe(
        map((results: any) => {

          return results.data.map(data => {
            let train_number = data.relationships.trip.data.id.split('-').slice(-1)[0]

            let trip_data = results.included.filter((included) => {
              return included.id === data.relationships.trip.data.id
            })[0]

            let destination = trip_data.relationships.route.data.id.split('-').slice(-1)[0]

            let departure_time = results.included.filter((included) => {
              if (included.relationships.trip) {
                return included.relationships.trip.data.id === data.relationships.trip.data.id
              } else {
                return false
              }
            })[0].attributes.departure_time

            departure_time = new Date(departure_time)

            let track_number = results.included.filter((included) => {
              return included.id === data.relationships.stop.data.id
            })[0].attributes.platform_code

            //construct train trip with all the infomation related
            let train: Traintrip = {
              'depatureTime': departure_time,
              'destination': destination,
              'trainNumber': train_number,
              'trackNumber': (track_number) ? track_number : "TBD",
              'status': data.attributes.status,
              'imageUrl': 'assets/images/traintrips/commuter-rail.png'
            }
            return train

            //sort the schedule by departure time
          }).sort((train1: Traintrip, train2: Traintrip) => {
            return train1.depatureTime > train2.depatureTime ? 1 : -1

            //filter out "Departed" train trip from the array
          }).filter((train: Traintrip) => train.status !== 'Departed')
        })
      )
  }
}

interface GetResponse {
  _embedded: {
    traintrips: Traintrip[]
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, Observable, of, switchMap } from 'rxjs';
import { LocationResponse } from 'src/app/shared/Models/LocationApiResponse';
import * as LocationActions from '../actions/location.actions';
import { CityLocation, ILocation } from '../../shared/Models/Location';
import { Action } from '@ngrx/store';

@Injectable()
export class LocationEffects {
  private API_USERNAME = 'encidev';

  LOCATION_API_URL = ``;

  constructor(
    private actions$: Actions<LocationActions.LOCATION_ACTIONS>,
    private http: HttpClient
  ) {}

  fetch$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(LocationActions.FETCH_LOCATIONS_REQUEST),
      switchMap((action) => {
        return this.http
          .get<LocationResponse>(
            `http://api.geonames.org/searchJSON?q=${action.query}&maxRows=10&username=${this.API_USERNAME}`
          )
          .pipe(
            map((res) => {
              const locations: ILocation[] = [];

              res.geonames.forEach((location) => {
                const newLocation = new CityLocation(
                  location.name,
                  location.adminName1,
                  location.countryName
                );

                locations.push(newLocation);
              });

              return LocationActions.FETCH_LOCATIONS_SUCCESS({ locations });
            }),

            catchError((error) => {
              return of(LocationActions.FETCH_LOCATIONS_ERROR({ error }));
            })
          );
      })
    )
  );

  // fetchLocations$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(LocationActions.FETCH_LOCATIONS_REQUEST),
  //       switchMap((action) => {
  //         return this.http
  //           .get<LocationResponse>(
  //             `http://api.geonames.org/searchJSON?q=${action.query}&maxRows=10&username=${this.API_USERNAME}`
  //           )
  //           .pipe(
  //             map((res) => {
  //               const locations: ILocation[] = [];

  //               res.geonames.forEach((location) => {
  //                 const newLocation = new CityLocation(
  //                   location.name,
  //                   location.adminName1,
  //                   location.countryName
  //                 );

  //                 locations.push(newLocation);
  //               });

  //               return of(
  //                 LocationActions.FETCH_LOCATIONS_SUCCESS({ locations })
  //               );
  //             }),

  //             catchError((error) => {
  //               return of(LocationActions.FETCH_LOCATIONS_ERROR({ error }));
  //             })
  //           );
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );
}

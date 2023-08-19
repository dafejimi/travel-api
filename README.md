# Travel-Api
Travel API is an API implementation that provides access to flight data by making requests to the flightera API, an API made publicly available through rapid API services.

While developing the codebase some of the design considerations made include:

- Making a choice between python's multiple rest frameworks (Django REST and fastAPI) in the end i went with javascript due to it's simplicity and ease of use.
- Input validation and error handling capabilities were minimized in order to arrive at a simple use scenario.

Simultaneously, the following challenges made development less than linear:

- Time constraints led to the obvious fact that this current implementation is minimal in order to meet up with the 24 hour deadline for the assessment.
- Another resulting consequence of the time constraint was that, testing was limited to simpler scenarios in order to make savings on time.

## Endpoints
1. **/airport/flights/:ident/:direction/:time** : Returns a list of flights for an airport, direction and time. The list is sorted ascending by scheduled departure time for direction=="departure" and sorted descending by scheduled arrival time for direction=="arrival".
The next departure/arrival time is returned for pagination.The dates returned for each flight represent the scheduled departure date in local time.
    *Parameters*
   - ident(string) - Ident of the airport to request. Ident is the unique identifier,  as returned by /airport/info endpoints.
   - direction(string) - Direction, one of "arrival" or "departure",
   - time(string) - Timestamp in UTC(Format: '2023-08-12T12:00:00.000Z'). If direction is "arrival", show flights with scheduled arrival time prior to this timestamp. If direction is "departure", show flights with scheduled departure time after this timestamp.
     
2. **/airport/info/:iata** : Returns detailed airport information for airports identified by the provided IATA. In most cases the list should contain only one entry.
However, due to the nature of the data, it is possible that multiple entries are returned.
    *Parameters*
  - iata(string) - The IATA code of the airport, must have a length of 3.

3. **/flights/statistics/:flnr** : Returns statistics for a flight number with one entry per route flown. Statistics are updated daily. The query can be filtered by route. Statistics are always as of today, please contact us if you require historical statistics.
    *Parameters*
   - flnr(string) - The flight number to request

4. **/flights/search/:flnr** : Returns a list of flights for a given flight number. Results are ordered by departure date ascending. The next departure time is returned for pagination. Will return a 400 if the date range requested is outside the subscription level
    *Parameters*
   - flnr(string) - The flight number to request

5. **/flights/info/:flnr** : Returns the info for a specified flight . Will return a 400 if the date requested is outside the subscription level.
    *Parameters*
   - flnr(string) - The flight number to request

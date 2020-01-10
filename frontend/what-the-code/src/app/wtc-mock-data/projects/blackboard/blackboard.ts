export class Blackboard {

  name = 'swbrett';
  description = 'like ebay kleinanzeigen. users can create ads for selling sth or search for ads. admins can configurate lots of stuff.';
  durationInMonths = 2;
  year = 2019;
  teamSize = 1;

  techstack = [
    { name: 'Java 8' },
    { name: 'Spring Boot Web' },
    { name: 'Spring Boot Data JPA' },
    { name: 'PostgreSQL' },
    { name: 'Keycloak' },

    { name: 'Angular 6' },
    { name: 'Google font' },
    { name: 'Angular Material Icons' },
    { name: 'Angular Flex Layout' },
    { name: 'ngx-quill for rich text editor' },
    { name: 'NgxSmartModal for modals' },
  ];

  featuresBackend = [
      { description: 'SSO', realization: 'keycloak' },
      { description: 'getting around CORS', realization: '@CrossOrigin(origins = {"http://localhost:4200"})' },
      { description: 'CRUD images and PDF files via REST', realization: 'Base64 converting and map from POJOs to TOs.' },
      { description: 'Searching with DYNAMIC parameters (keyword, type, category, pagination, sorting, order, byUser, byId, isActive)', realization: 'JPA Criteria API' },
      { description: 'Pagination', realization: 'Wrap the REST Response in Page<AdTO>' },
      { description: 'rezise images', realization: 'see ImageResizeService.java' },
      { description: 'bootstrap data to work with', realization: 'implements CommandLineRunner' },
      { description: 'Job running every night deleting old ads', realization: 'Spring Scheduler with cron expression' },
      { description: 'persist configurations in the database', realization: 'create table, make enum as unique key and for each value type a nullable column. then use getSetting(Enum.SETTING_X).getNumberValue()' },
      { description: 'errorhandling', realization: 'in the REST-controller make try catch block and throw new ResponseStatusException' },
    ];

  featuresFrontend = [

    { description: 'responsive and mobile design', realization: 'Angular flex layout' },
    { description: 'email, phone, url validation', realization: 'custom directives, validation via regex' },
    { description: 'rich text editor', realization: 'ngx-quill with html text' },
    { description: 'modals', realization: 'NgxSmartModal' },
    { description: 'open original image on new tab', realization: 'window.open. base64 url must be correct. use <iframe because Chrome bug' },
    { description: 'download file on click', realization: 'a.href = ... , a.click' },
    { description: 'filterbar with keyword, categories, radio button, drodown menue', realization: 'look at the wonderful code' },
    { description: 'paging control bar', realization: 'look at the wonderful code' },
    { description: 'errorhandling', realization: 'httpClient.get(...).pipe(catchError(doSth))  or service.getStuff(...).subscribe(success => {...}, error => {...})' },
    { description: 'accessibility', realization: 'you can use the app with keyboard and screenreader' },

  ];

}

<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo,APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AppComponent } from "./app.component";
=======
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { AppComponent } from "./app.component";
import { ListofrepoComponent } from "./components/listofrepo/listofrepo.component";
import { RepodependenciesComponent } from "./components/repodependencies/repodependencies.component";
import { GithubRepoService } from "./services/github-repo.service";
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
>>>>>>> done

export function createApollo(httpLink: HttpLink) {
 
}

@NgModule({
  imports: [
    HttpClientModule, // provides HttpClient for HttpLink
    ApolloModule,
    HttpLinkModule,
<<<<<<< HEAD
    BrowserModule
  ],
   providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
 bootstrap: [AppComponent],
 declarations: [
    AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    const http = httpLink.create({uri: 'https://api.github.com/graphql'});

    const auth = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = "ea2412a6f84c6d7f64caa98f20970aa23cad8038";
=======
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [GithubRepoService, {
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent],
  declarations: [AppComponent, ListofrepoComponent, RepodependenciesComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({ uri: "https://api.github.com/graphql" });

    const auth = setContext((_, { headers }) => {
      // github token
      const token = "b3881527728e7a2cc3c1d32f0902df0624cbeca5";
>>>>>>> done
      // return the headers to the context so httpLink can read them
      // in this example we assume headers property exists
      // and it is an instance of HttpHeaders
      if (!token) {
        return {};
      } else {
        return {
          headers: {
<<<<<<< HEAD
        Authorization: `Bearer ${token}`,
        Accept:"application/vnd.github.hawkgirl-preview, application/vnd.github.vixen-preview+json"
    }
=======
            // auth token
            Authorization: `Bearer ${token}`,
            // to get dependency manifest
            Accept:
              "application/vnd.github.hawkgirl-preview, application/vnd.github.vixen-preview+json"
          }
>>>>>>> done
        };
      }
    });

    apollo.create({
      link: auth.concat(http),
<<<<<<< HEAD
      // other options like cache
      cache:new InMemoryCache()
    });
  }
}
=======
      cache: new InMemoryCache()
    });
  }
}
>>>>>>> done

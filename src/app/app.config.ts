import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {provideClientHydration, withEventReplay, withI18nSupport} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => {
      return new Promise((resolve) => {
        if (typeof window !== 'undefined') {
          // Track all DOM changes (attributes, additions, removals, text changes)
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              const element = mutation.target as any;

              if (mutation.type === 'attributes') {
                const attributeName = mutation.attributeName;
                const oldValue = mutation.oldValue;
                const newValue = element.getAttribute(attributeName);

                // Log all attribute changes
                console.log(`[ ${ new Date().toISOString() } ] Attribute changed:`, {
                  attribute: attributeName,
                  oldValue: oldValue,
                  newValue: newValue,
                  tagName: element.tagName,
                  element
                });
              }

              if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((n: any) => {
                  if (n.nodeType === Node.ELEMENT_NODE) {
                    console.log('Element added:', {
                      element: n,
                      tagName: n.tagName,
                      parent: element.tagName
                    });
                  }
                });

                mutation.removedNodes.forEach((n: any) => {
                  if (n.nodeType === Node.ELEMENT_NODE) {
                    console.log('Element removed:', {
                      element: n,
                      tagName: n.tagName,
                      parent: element.tagName
                    });
                  }
                });
              }

              if (mutation.type === 'characterData') {
                console.log('Text changed:', {
                  element: element,
                  oldText: mutation.oldValue,
                  newText: element.textContent
                });
              }
            });
          });

          observer.observe(document, {
            attributes: true,
            attributeOldValue: true,
            subtree: true,
            childList: true,
            characterData: true,
            characterDataOldValue: true
          });
          console.log('🔍 Complete DOM change tracking started. Check console for all changes.');
        }

        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    }),
    provideZonelessChangeDetection(),
    provideClientHydration(withI18nSupport(), withEventReplay()),
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding())
  ]
};

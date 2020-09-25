import { IScopedQueryUtils } from './typedefs';
declare module 'playwright/types/types' {
    interface Page {
        getDocument(): Promise<ElementHandle>;
    }
    interface ElementHandle extends IScopedQueryUtils {
    }
}

export { CoreDataModule } from './lib/core-data.module';

// Authentication
export { AuthGuard } from './lib/auth/auth.guard';
export { AuthService } from './lib/auth/auth.service';
export { TokenInterceptorService as TokenInterceptor } from './lib/auth/token-interceptor.service';

// Items
export { ItemsService } from './lib/items/items.service';
export { Item, emptyItem } from './lib/items/items.model';

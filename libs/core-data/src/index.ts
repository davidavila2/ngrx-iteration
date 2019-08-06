export { CoreDataModule } from './lib/core-data.module';

// Authentication
export { AuthGuard } from './lib/auth/auth.guard';
export { AuthService } from './lib/auth/auth.service';
export { TokenInterceptorService as TokenInterceptor } from './lib/auth/token-interceptor.service';

// Items
export { ItemsService } from './lib/items/items.service';
export { Item, emptyItem } from './lib/items/items.model';


// Logos
export { LogoService } from './lib/logos/logo.service';
export { Icons } from './lib/logos/logo'


// Pokemon
export { PokemonService } from './lib/pokemon/pokemon.service';
export { PokeResource, PokeDetails, emptyPokemon} from './lib/pokemon/pokemon';

// Starwars
export { Amiibo, AmiiboResults } from './lib/amiibo/starwars';
export { StarwarsService } from './lib/amiibo/starwars.service';

// Marvel 
export { Marvel, Marvelresults, MarvelCharacters } from './lib/marvel/marvel';
export { MarvelService } from './lib/marvel/marvel.service';

//Something
export { Something } from './lib/something/something';
export { SomethingService } from './lib/something/something.service';

// Onepiece
export { Onepiece } from './lib/onepiece/onepiece';
export { OnepieceService } from './lib/onepiece/onepiece.service';

// Yugioh
export { CardDetails, Yugioh } from './lib/yugioh/yugioh';
export { YugiohService } from './lib/yugioh/yugioh.service';

//Eight 
export { EightService } from './lib/eight/eight.service';
export { Eight } from './lib/eight/eight';

//nine
export { Nine } from './lib/nine/nine';
export { NineService } from './lib/nine/nine.service';

//ten
export { Ten } from './lib/ten/ten';
export { TenService } from './lib/ten/ten.service';
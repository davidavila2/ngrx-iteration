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

// Amiibo
export { Amiibo, AmiiboResults, emptyAmiibo } from './lib/amiibo/amiibo';
export { AmiiboService } from './lib/amiibo/amiibo.service';

// Marvel 
export { Marvel, Marvelresults, MarvelCharacters, emptyMarvel } from './lib/marvel/marvel';
export { MarvelService } from './lib/marvel/marvel.service';

//Something
export { Something, ShowSomething, emptyStarwars } from './lib/something/something';
export { SomethingService } from './lib/something/something.service';

// Onepiece
export { Onepiece, emptyOnepiece } from './lib/onepiece/onepiece';
export { OnepieceService } from './lib/onepiece/onepiece.service';

// Ricknmorty
export { RicknmortyDetails, Ricknmorty, emptyRicknmortyDetails} from './lib/ricknmorty/ricknmorty';
export { RicknmortyService } from './lib/ricknmorty/ricknmorty.service';

//supersmashbros
export { EightService } from './lib/supersmashbros/eight.service';
export { Supersmashbros, emptySupersmashbro } from './lib/supersmashbros/eight';

//Harrypotter
export { Nine, emptyHarrypotter } from './lib/harrypotter/nine';
export { NineService } from './lib/harrypotter/nine.service';

//Apex
export { Apexx, emptyApex } from './lib/apex/apexx';
export { ApexService } from './lib/apex/apex.service';
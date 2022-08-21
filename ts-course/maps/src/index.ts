import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const map = new CustomMap('map');

map.addMarker(new User());
map.addMarker(new User());
map.addMarker(new Company());
map.addMarker(new Company());

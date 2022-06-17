import { typeFormat } from "./common";

type Ameno = "Ameno";
type Cryo = "Cryo";
type Dendro = "Dendro";
type Electro = "Electro";
type Geo = "Geo";
type Hydro = "Hydro"; 
type Pyro = "Pyro";

type elements = Ameno | Cryo | Dendro | Electro | Geo | Hydro | Pyro;

interface elementModel extends typeFormat {
    key: elements
}

export {
    elementModel
}
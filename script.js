import { DB } from "./firebaseconfig";
import {
  collection,
  addDoc,
} from "https://gremio-maior-do-brasil-default-rtdb.firebaseio.com/";

function getInputs() {
  return {
    nome: document.getElementById("nome"),
    idade: document.getElementById("idade"),
    cargo: document.getElementById("cargo"),
  };
}

function getValues({ nome, idade, cargo }) {
  return {
    nome: nome.value.trim(),
    idade: parseInt(idade.value),
    cargo: cargo.value.trim(),
  };
}

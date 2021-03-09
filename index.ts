import { Observable } from "rxjs";

const observable = new Observable();

observable.subscribe({
  next: () => {
    console.log("something");
  },
});

observable.subscribe(() => {
  console.log("something");
});

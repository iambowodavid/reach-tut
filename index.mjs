import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

//create starting balance
const startingBalance = stdlib.parseCurrency(100);

//create test accounts for Alice and Bob
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

//deploy the ontract application
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

//now let's implement Alice and Bob's interactions
await Promise.all([
  ctcAlice.p.Alice({
    // implement Alice's interact object here
  }),
  ctcBob.p.Bob({
    // implement Bob's interact object here
  }),
]);
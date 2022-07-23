import { Application } from "https://deno.land/x/oak/mod.ts";
import {
    yellow,
  } from 'https://deno.land/std@0.131.0/fmt/colors.ts'
import router from './routes.ts'

const port = 1337
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(yellow(`Server running on port ${port}`))
await app.listen({ port });

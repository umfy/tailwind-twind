import { Router, Context } from 'https://deno.land/x/oak@v10.5.1/mod.ts'

const router = new Router()

router.get('/', async (ctx: Context) => {
  await ctx.send({
    root: `${Deno.cwd()}/views`,
    index: 'index.html',
  })
})

export default router

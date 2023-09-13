
import { rest } from 'msw'
import { API_URL } from "../../app/constants";

export const handlers = [
    rest.get(API_URL, (req, res, ctx) => {
        return res(
            ctx.json({
                qoute: "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
                character: 'Homer Simpson',
            })
        )
    }), 
]
import { Request, Response, Router } from "express";
import {Toode} from "../models/toode";

const router: Router = Router();

let toode: Toode | null = new Toode(1, "Koola", 1.5, true);

router.get("/toode", (req: Request, res: Response) =>  {
    res.send(toode)
});

router.get("/kustuta-toode", (req: Request, res: Response) =>  {
    toode = null;
    res.send(toode)
});

router.get("/kustuta-toode2", (req: Request, res: Response) =>  {
    toode = null;
    res.send("Edukalt kustutatud");
});

router.get("/suurenda-hinda", (req: Request, res: Response) =>  {
    if (toode !== null) {
        toode.price = toode.price + 1;
    }
    res.send(toode);
});

router.get("/activity", (req: Request, res: Response) => {
    if (toode !== null) {
        if (toode.isActive) {
            toode.isActive = false;
        } else {
            toode.isActive = true;
        }
    }
    res.send(toode);
})

router.get("/change-name/:id", (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const newName = "Pepis"

        if (toode === null || toode.id !== id) {
            return res.status(404).json({error: 'Nope'})
        }

        toode.name = newName

        return res.json({message: 'done'})
})

export default router;
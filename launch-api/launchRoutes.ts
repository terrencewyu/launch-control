// launchRoutes.ts

import { LaunchesController } from "./launches/launches-controller";


export class Routes {       
    public launchesController: LaunchesController = new LaunchesController();

    public routes(app): void {
        app.route('/api/launches').get(this.launchesController.getLaunches);
    }
}
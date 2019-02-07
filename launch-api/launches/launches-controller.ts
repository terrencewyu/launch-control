// launches-controller.ts

import * as request from 'request-promise-native';
import { Launch } from './launch';

export class LaunchesController {

    public async getLaunches(): Promise<Launch[]> {
        console.log('Getting launches...');
        const launchData = await LaunchesController.requestFromLaunchLibarary();
        const launches = await LaunchesController.convertToLaunches(launchData);
        // console.log(JSON.stringify(launchData));
        console.log(JSON.stringify(launches));
        return launches;
    }
    
    private static async requestFromLaunchLibarary(): Promise<any> {
        console.log('Requesting launch library');
        const uri = 'https://launchlibrary.net/1.4/launch/next/5';
        const options = {
            uri: uri
        };
        
        const result = await request.get(options)
            .catch(err => {
                console.log(`Request to launch library failed: ${err}`);
            });
        return result;
    }

    private static async convertToLaunches(launchData: any): Promise<Launch[]> {
        const launches: Launch[] = [];
        const jsonLaunchData = JSON.parse(launchData);
        for (const event of jsonLaunchData.launches) {
            const launch: Launch  = {
                name: event.name,
                agency: { 
                    name: event.lsp.agency, 
                    url: event.lsp.wikiURL 
                },
                location: { 
                    name: event.location.name, 
                    url: event.location.wikiURL 
                },
                time: event.isostart,
                url: event.wikiURL
            }
            launches.push(launch);
        }
        return launches;
    }
}
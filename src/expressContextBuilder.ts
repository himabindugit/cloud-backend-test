// import { ExpressContext } from 'apollo-server-express';
import { getCoordinates } from './dataSources/calculateCoordinates';
import conf from './conf';
import log from 'lambda-log';
import { ExpressContext } from 'apollo-server-express';

export interface ExpressContextInterface {
  event: any;
  context: any;
  express: ExpressContext;
}

// export interface ContextBuilder {
//   headers: any;
//   functionName: any;
//   event: any;
//   context: any;
//   expressRequest: any;
// }

// // export const expressContextBuilder = ({
// //   event,
// //   context,
// //   express,
// // }: ExpressContextInterface): ContextBuilder => ({
// //   headers: event.headers,
// //   functionName: context.functionName,
// //   event,
// //   context,
// //   expressRequest: express.req,
// // });

export const expressContextBuilder = ({ event, context, express }: any) => {
  log.debug(`event: ${event}`);
  log.debug(`event: ${context}`);
  log.info(`express req body: ${express?.req.body}`);
};

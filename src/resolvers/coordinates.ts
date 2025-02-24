// import { log } from '.';
// import { UserInputError } from 'apollo-server';
import { GraphQLResolveInfo } from 'graphql';
import log from 'lambda-log';
import { Entry } from 'node-geocoder';

// Resolvers define the technique for fetching the types defined in the
// schema.
// I read a doc, where each resolver making a different async call would be better compared
// to making one single async call
// because failing to get longitude should not impact latitude
// I am taking first address address[0], based on the assumption full address is given
// happy to extend to provide multiple addresses by mappiing through addresses array
export const resolvers = {
  Query: {
    address: (
      _parent: any,
      args: { name: string },
      { dataSources }: any,
      _info?: GraphQLResolveInfo
    ) => {
      log.info(`args.name: ${args.name}`);
      return dataSources.addressSource.getCoordinates(args.name);
    },
  },
  Address: {
    longitude: ({ address }: { address: Entry }) => {
      const longitude = address?.longitude;
      return longitude;
    },
    latitude: ({ address }: { address: Entry }) => {
      const latitude = address?.latitude;
      return latitude;
    },
  },
};

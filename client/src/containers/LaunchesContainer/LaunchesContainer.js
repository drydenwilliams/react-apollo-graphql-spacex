import { graphql } from "react-apollo";
import { LAUNCHES_QUERY } from "./query";

import Launches from '../../components/Launches';

const LaunchesContainer = graphql(LAUNCHES_QUERY, {
  options: props => ({ ...props }),
  props: ({ data, ownProps }) => ({
    ...data,
    onLoad: console.log('Called when has data', data, ownProps)
  })
})(Launches)

export default LaunchesContainer;

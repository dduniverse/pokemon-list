import React from 'react';
import {Segment, Dimmer, Loader} from 'semantic-ui-react';

export default function LargeLoading() {
  return (
    <Segment className="h-screen w-screen" style={{border: 'none'}}>
      <Dimmer active inverted>
        <Loader size="medium"></Loader>
      </Dimmer>
    </Segment>
  );
}

import React from 'react';
import axios from 'axios';
import { Button, Item, Label, List, Segment } from 'semantic-ui-react';
import { useQuery } from 'react-query';
import { Activity } from './ActivitiesList.types';
import { API_URL } from 'core/consts';
import { List as ListLoader } from 'react-content-loader'

export const ActivitiesList: React.FC = React.memo(() => {
  const { isLoading, isError, data, error } = useQuery('activities', async () => {
    const { data } = await axios.get<Activity[]>(`${API_URL}/activities`)

    return data
  });

  if (isError) {
    console.error(error);

    return <span>Error...</span>
  }

  if (isLoading) {
    return <ListLoader />
  }

  return (
    <Segment>
      <Item.Group divided>
        {data?.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>

              <Item.Meta>{activity.date}</Item.Meta>

              <Item.Description>
                <div>{activity.description}</div>

                <div>{activity.venue}</div>
              </Item.Description>

              <Item.Extra>
                <Button floated="right" content="View" color="blue" />

                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
})

import {
    Grid,
    Typography,
} from '@material-ui/core';
import * as React from 'react';
import {convertToUTCTime} from '../../../helpers';

export interface UserDataFooterProps {
    // tslint:disable-next-line:no-any
    user: any;
}

export class UserDataFooter extends React.Component<UserDataFooterProps> {
    public render() {
        const {user} = this.props;

        return (
            <Grid container={true} justify={'center'} spacing={40}>
                <Grid item={true}>
                    <Typography style={{color: '#757575'}}>
                        Created at: {convertToUTCTime(user.created_at)}
                    </Typography>
                </Grid>
                <Grid item={true}>
                    <Typography style={{color: '#757575'}}>
                        Last activity: {convertToUTCTime(user.updated_at)}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

import {
    Grid,
    Typography,
} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface UserDataHeaderProps {
    // tslint:disable-next-line:no-any
    classes: any;
}

export class UserDataHeader extends React.Component<UserDataHeaderProps> {
    public render() {
        const {classes} = this.props;

        return (
            <Grid container={true}>
                <a style={{marginRight: 15}} href="/tower">
                    <SvgIcon className={classes.icon} viewBox="0 0 24 24">
                        <path fill="#3598D5" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
                    </SvgIcon>
                </a>
                <Typography variant="h4" gutterBottom={true} component="h4" style={{color: '#3598D5'}}>
                    Account info
                </Typography>
            </Grid>
        );
    }
}

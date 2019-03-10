import {
    Button,
    Grid,
    Switch,
    TextField,
    Typography,
} from '@material-ui/core';
import Countries = require('country-data');
import * as React from 'react';
import { convertToUTCTime, findPhone } from '../../../helpers';

// tslint:disable:no-any
export interface UserSummaryProps {
    classes: any;
    user: any;
    handleChangeUserState: (e: any) => void;
    handleChangeRole: (e: any) => void;
    handleChangeUserOTP: (e: any) => void;
    showMore: boolean;
    showMoreUserInfo: (e: any) => void;
}
// tslint:enable:no-any

const stateTypes = [
    {
        value: 'Active',
        key: 'active',
    },
    {
        value: 'Banned',
        key: 'banned',
    },
];

const roleTypes = [
    {
        value: 'Admin',
        key: 'admin',
    },
    {
        value: 'Member',
        key: 'member',
    },
];


export class UserSummary extends React.Component<UserSummaryProps> {
    public render() {
        const {
            classes,
            user,
            handleChangeUserState,
            handleChangeRole,
            handleChangeUserOTP,
            showMore,
        } = this.props;

        return (
            <React.Fragment>
                <Typography variant="h3" gutterBottom={true} component="h3">
                    {user.email}
                </Typography>
                <br/>
                <Grid container={true} justify={'space-between'} style={{marginTop: 20, marginBottom: 40}}>
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" component="h6" gutterBottom={true}>
                            <b>Level</b>
                        </Typography>
                        <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                            {user.level}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" gutterBottom={true} component="h6">
                            <b>UID</b>
                        </Typography>
                        <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                            {user.uid}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" gutterBottom={true} component="h6">
                            <b>Phone number</b>
                        </Typography>
                        <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                            {user.phones.length > 0 ? findPhone(user.phones).number : '-'}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={3} style={{paddingTop: 5}}>
                        <Typography variant="h6" gutterBottom={true} component="h6">
                            <TextField
                                select={true}
                                value={user.state}
                                label="State"
                                variant="outlined"
                                className={classes.textField}
                                onChange={handleChangeUserState}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                            >
                                {stateTypes.map(option => (
                                    <option key={option.key} value={option.key}>
                                        {option.value}
                                    </option>
                                ))}
                            </TextField>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container={true} justify={'space-between'} style={{marginTop: 20, marginBottom: 40}}>
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" component="h6" gutterBottom={true}>
                            <b>First name</b>
                        </Typography>
                        <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                            {user.profile !== null ? user.profile.first_name : '-'}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" gutterBottom={true} component="h6">
                            <b>Last name</b>
                        </Typography>
                        <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                            {user.profile !== null ? user.profile.last_name : '-'}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" gutterBottom={true} component="h6">
                            <b>Day of Birth</b>
                        </Typography>
                        <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                            {user.profile !== null ? user.profile.dob : '-'}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={3} style={{paddingTop: 5}}>
                        <Typography variant="h6" gutterBottom={true} component="h6">
                            <TextField
                                select={true}
                                value={user.role}
                                label="Role"
                                variant="outlined"
                                className={classes.textField}
                                onChange={handleChangeRole}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                            >
                                {roleTypes.map(option => (
                                    <option key={option.key} value={option.key}>
                                        {option.value}
                                    </option>
                                ))}
                            </TextField>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container={true} justify={'space-between'} style={{marginTop: 20, marginBottom: 40}}>
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" gutterBottom={true} component="h6">
                            <b>Country</b>
                        </Typography>
                        <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                            {user.profile !== null ? this.displayCountry(user.profile.country) : '-'}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <Typography variant="h6" gutterBottom={true} component="h6">
                            <b>Validated at</b>
                        </Typography>
                        <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                            {user.phones.length > 0 ? convertToUTCTime(findPhone(user.phones).validated_at) : '-'}
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={3}>
                        {user.profile === null || showMore ? (
                            <><Typography variant="h6" gutterBottom={true} component="h6">
                                <b>Postcode</b>
                            </Typography>
                                <Typography
                                    variant="h6"
                                    gutterBottom={true}
                                    component="h6"
                                    style={{color: '#757575'}}
                                >
                                    {user.profile !== null ? user.profile.postcode : '-'}
                                </Typography></>
                        ) : (
                            <Button onClick={e => this.props.showMoreUserInfo(e)} style={{marginTop: 10}}>
                                <Typography variant="h6" component="h6" style={{color: '#3598D5'}}>
                                    MORE USER INFO
                                </Typography>
                            </Button>
                        )}
                    </Grid>
                    <Grid container={true} justify={'flex-start'} item={true} xs={3}>
                        <Grid item={true} style={{paddingLeft: 10, marginRight: 60}}>
                            <Typography variant="h6" gutterBottom={true} component="h6">
                                <b>Authorization 2FA</b>
                            </Typography>
                            <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                                {user.otp ? 'Enable' : 'Disable'}
                            </Typography>
                        </Grid>
                        <Grid item={true}>
                            <Switch
                                checked={user.otp}
                                onChange={handleChangeUserOTP}
                                color="primary"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    private displayCountry = (code: string) => {
        if (code === 'null') {
            return '-';
        } else if (Countries.countries[code.toUpperCase()] !== undefined) {
            return Countries.countries[code.toUpperCase()].name;
        }
        return code;
    }
}

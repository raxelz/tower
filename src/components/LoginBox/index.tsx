import {
    Avatar,
    Button,
    createStyles,
    FormControl,
    Input,
    InputLabel,
    Theme,
    Typography,
    WithStyles,
    withStyles,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import * as React from 'react';

const styles = (theme: Theme) => createStyles({
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        backgroundColor: '#3598D5',
        color: '#ffffff',
    },
});

interface StyleProps extends WithStyles<typeof styles> {
    theme: Theme;
}

interface OwnProps {
    email: string;
    password: string;
    handleChangeEmail: (email: string) => void;
    handleChangePassword: (password: string) => void;
    handleOTPCode: (otpCode: string) => void;
    handleSignIn: () => void;
    require2FA?: boolean;
}

type Props = StyleProps & OwnProps;

class LoginComponent extends React.Component<Props> {
    public render() {
        const {
            classes,
            email,
            password,
            require2FA,
        } = this.props;

        return (
            <React.Fragment>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required={true} fullWidth={true} style={{ color: '#3598D5' }}>
                        <InputLabel htmlFor="email" style={{ color: '#3598D5' }}>Email Address</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleEmail}
                            autoComplete="email"
                            autoFocus={true}
                        />
                    </FormControl>
                    <FormControl margin="normal" required={true} fullWidth={true} style={{ color: '#3598D5' }}>
                        <InputLabel htmlFor="password" style={{ color: '#3598D5' }}>Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.handlePassword}
                            id="password"
                            autoComplete="current-password"
                        />
                    </FormControl>
                    { require2FA ? (<FormControl margin="normal" required={true} fullWidth={true} style={{ color: '#3598D5' }}>
                        <InputLabel htmlFor="otp_code" style={{ color: '#3598D5' }}>OTP code</InputLabel>
                        <Input
                            id="otp_code"
                            name="otp_code"
                            onChange={this.handleOTPCode}
                            autoFocus={true}
                        />
                    </FormControl>) : null}
                    <Button
                        type="submit"
                        onClick={this.signIn}
                        fullWidth={true}
                        variant="contained"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                </form>
            </React.Fragment>
        );
    }

    // tslint:disable-next-line:no-any
    private handleEmail = (e: any) => {
        this.props.handleChangeEmail(e);
    };

    // tslint:disable-next-line:no-any
    private handlePassword = (e: any) => {
        this.props.handleChangePassword(e);
    };

    // tslint:disable-next-line:no-any
    private handleOTPCode = (e: any) => {
        this.props.handleOTPCode(e);
    };

    // tslint:disable-next-line:no-any
    private signIn = (e?: any) => {
        if (e) {
            e.preventDefault();
        }
        this.props.handleSignIn();
    };
}

export const LoginBox = withStyles(styles, { withTheme: true })(LoginComponent);

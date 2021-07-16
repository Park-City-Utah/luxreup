import React from 'react';
import { Formik } from 'formik';

import AppFormField from './AppFormField';
import SubmitButton from './SubmitButton';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ onSubmit }
            validationSchema={validationSchema}
        >
            { ( /*{handleChange, handleSubmit, errors, setFieldTouched, touched} */ ) => (//bracket allows multuple lines
                <>
                    <AppFormField
                        name="email"
                        icon="email"
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyBoardType="email-address"
                        textContentType="emailAddress"  //IOS, autofill from keychain
                        //onBlur={() => setFieldTouched("email")}//Moved to component AppFormField
                        //onChangeText={handleChange("email")}
                    />
                    <AppFormField
                        name="password"
                        icon="lock"
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry     //Default true 
                        //onBlur={() => setFieldTouched("password")}
                        //onChangeText={handleChange("password")}
                    />
                    <SubmitButton
                        title="Login"
                    />
                </>
                )}
        </Formik>
    );
}

export default AppForm;
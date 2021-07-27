import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import AppForm from "../Components/Forms/AppForm";
import AppFormField from "../Components/Forms/AppFormField";
import SubmitButton  from '../Components/Forms/SubmitButton';
import AppFormPicker from '../Components/Forms/AppFormPicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

//Picker choices
const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
  ];
  

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
          <AppForm
            initialValues={{
              title: "",
              price: "",
              description: "",
              category: null,   //Object, null if none
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField 
                maxLength={255}     //Limit input
                name="title" 
                placeholder="Title" 
            />
            <AppFormField
            keyboardType="numeric"
            maxLength={8}          //10000.99
            name="price"
            placeholder="Price"
            />
            <AppFormPicker 
                items={categories} 
                name="category" 
                placeholder="Category" 
            />
            <AppFormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
            />
            <SubmitButton title="Post" />
        </AppForm>
      </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    }
  });

export default ListingEditScreen;
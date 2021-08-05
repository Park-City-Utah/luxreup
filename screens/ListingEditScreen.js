import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import AppForm from "../Components/Forms/AppForm";
import AppFormField from "../Components/Forms/AppFormField";
import SubmitButton  from '../Components/Forms/SubmitButton';
import AppFormPicker from '../Components/Forms/AppFormPicker';
import CategoryPickerItem from '../Components/CategoryPickerItem';
import FormImagePicker from '../Components/Forms/FormImagePicker';
import useLocation from "../Hooks/useLocation";
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),        //Not required, empty array initialization
});

//Picker choices
const categories = [
  {
    backgroundColor: colors.furniture,
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: colors.car,
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: colors.camera,
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: colors.games,
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: colors.clothing,
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: colors.sports,
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: colors.moviesAndMusic,
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: colors.books,
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: colors.other,
    icon: "application",
    label: "Other",
    value: 9,
  },
];
  
function ListingEditScreen() {
  const location = useLocation();

    return (
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,   //Object, null if none
            images: [],       //Never null, doens't need to be required by YUP.
          }}
          onSubmit={(values) => console.log("location")}
          validationSchema={validationSchema}
        >
        <FormImagePicker name="images" />
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
                numberOfColumns={3}
                PickerItemComponent={CategoryPickerItem}
                placeholder="Category" 
                width="50%"
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
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../Components/Screen';
import AppForm from "../Components/Forms/AppForm";
import AppFormField from "../Components/Forms/AppFormField";
import SubmitButton  from '../Components/Forms/SubmitButton';
import AppFormPicker from '../Components/Forms/AppFormPicker';
import CategoryPickerItem from '../Components/CategoryPickerItem';
import ImageSelectorList from '../Components/ImageSelectorList';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    //imageUri: Yup.object().required().nullable().label("Image"),
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
});

//Picker choices
const categories = [
    { label: "Furniture", value: 1, backgroundColor: colors.primary, name: 'apps' },
    { label: "Clothing", value: 2, backgroundColor: colors.secondary, name: 'email' },
    { label: "Camera", value: 3, backgroundColor: colors.royalBlue, name: 'lock' },
  ];
  

function ListingEditScreen() {
  const [imageUris, setImageUri] = useState([]);

  //Leverage setImageUri above
  const handleAdd = uri => {  
    setImageUris([...imageUris, uri]);
  }

  //Leverage setImageUri above
  const handleRemove = uri => {
    setImageUris(imageUris.filter( imageUri => imageUri !== uri));//remove by filter and return without
  }

    return (
        <Screen style={styles.container}>
          <ImageSelectorList
            imageUri={imageUris} 
            //onChangeImage={(uri) => setImageUris(uri)}
            //onAddImage={(uri) => handleAdd(uri)}
            //onRemoveImage={(uri) => handleRemove(uri)}
            //Previous can be simplified:
            onAddImage={ handleAdd }
            onRemoveImage={ handleRemove }
          />
          <AppForm
            initialValues={{
              //image: null,
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
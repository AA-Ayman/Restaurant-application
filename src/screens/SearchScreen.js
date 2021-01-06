import React, {useState} from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {

    const [term,setTerm] = useState ('');
    const [searchApi,results,errorMessage] = useResults ();

    const filterResultsByPrice = (price) =>{
        //price === '$' || '$$' || '$$$'

        return results.filter (result => {

            return result.price === price;
        });


    };
    

return (
    <>

        <SearchBar 
        term={term}
        ontermChange= {setTerm}
        onTermSubmit = {()=> searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        
        <ScrollView>
        <ResultsList results= {filterResultsByPrice ('$')} title="Cost Effective" />
        <ResultsList results= {filterResultsByPrice ('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice ('$$$')} title="Big Spender!" />
        </ScrollView>

    </>
);
};


const styles = StyleSheet.create ({});


export default SearchScreen;

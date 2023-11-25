import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                    placeholder="Ex: 1.75"
                    inputMode="numeric"
                />

                <Text>Peso</Text>
                <TextInput 
                    placeholder="Ex: 75.00"
                    inputMode="numeric"
                />

                <Button
                    title="Calcular IMC"
                />
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}
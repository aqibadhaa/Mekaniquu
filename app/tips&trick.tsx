import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const ImageBanner = require('../assets/hero_PN1141_OilChanges_Banner.jpg');

interface InfoItemProps {
    children: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ children }) => (
    <View className="flex-row mb-3">
        <View className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3" />
        <Text className="flex-1 text-gray-700 text-sm leading-relaxed">
            {children}
        </Text>
    </View>
);

const PanduanMasaPakai: React.FC = () => {
    return (
        <ScrollView className="flex-1 bg-white rounded-t-2xl mb-10 -mt-12">
            <View className="rounded-t overflow-hidden -mb-3">
                <Image
                    source={ImageBanner}
                    className="w-full h-48"
                    resizeMode="cover"
                />
            </View>
            <View className="p-6">


                {/* Title Section */}
                <View className="mb-4">
                    <View className="flex-row items-center mb-2">
                        <View className="w-6 h-6 rounded-full bg-blue-100 items-center justify-center mr-2">
                            <Text className="text-blue-600 text-xs">🛢️</Text>
                        </View>
                        <Text className="text-xl font-bold text-gray-800">
                            Oli Mesin (Oil Change)
                        </Text>
                    </View>
                    <Text className="text-base text-gray-600 leading-relaxed">
                        Oli mesin adalah komponen vital yang melumasi dan melindungi mesin kendaraan Anda
                    </Text>
                </View>

                {/* Masa Pakai Section */}
                <View className="bg-blue-50 rounded-lg p-4 mb-4">
                    <View className="flex-row items-center mb-3">
                        <View className="w-6 h-6 rounded-full bg-blue-500 items-center justify-center mr-2">
                            <Text className="text-white text-xs font-bold">📅</Text>
                        </View>
                        <Text className="text-xl font-semibold text-blue-800">
                            Masa Pakai
                        </Text>
                    </View>

                    <View className="space-y-3">
                        <InfoItem >
                            Biasanya oli mesin perlu diganti setiap{' '}
                            <Text className="font-bold text-gray-900">
                                5.000 hingga 10.000 km
                            </Text>
                            , tergantung pada jenis oli dan spesifikasi kendaraan.
                        </InfoItem>

                        <InfoItem>
                            Jika menggunakan{' '}
                            <Text className="font-bold text-gray-900">oli sintetis</Text>,
                            interval penggantian bisa lebih panjang (biasanya 10.000 km atau lebih).
                        </InfoItem>
                    </View>
                </View>

                {/* Tips Section */}
                <View className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <View className="flex-row items-center mb-2">
                        <Text className="text-lg mr-2">💡</Text>
                        <Text className="text-base font-semibold text-yellow-800">
                            Tips Penting
                        </Text>
                    </View>
                    <Text className="text-xs text-gray-600 leading-relaxed">
                        Selalu periksa manual kendaraan Anda untuk rekomendasi spesifik
                        mengenai interval penggantian oli mesin.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default PanduanMasaPakai;
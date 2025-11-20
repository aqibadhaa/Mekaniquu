import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import airFilterIcon from "../appComponent/airFilterSvg";
import BrakeCanvassIcon from "../appComponent/brakeSystemSvg";
import OilChangeIcon from "../appComponent/oilChangeSvg";
import TireIcon from "../appComponent/tireSvg";

const services = [
    {
        id: 1,
        title: "Oil Change",
        subtitle: "lubricated Your Machine",
        bg: "bg-orange-500",
        icon: OilChangeIcon,
        iconType: "svg",
        subtitleColor: "text-orange-600",
    },
    {
        id: 2,
        title: "Tire Change",
        subtitle: "Get More Grip!",
        bg: "bg-blue-500",
        icon: TireIcon,
        iconType: "svg", // Ganti jadi "svg" biar lebih jelas
        subtitleColor: "text-blue-600",
    },
    {
        id: 3,
        title: "Air Filter Check",
        subtitle: "Better air for Performance",
        bg: "bg-purple-500",
        icon: airFilterIcon,
        iconType: "svg",
        subtitleColor: "text-purple-600",
    },
    {
        id: 4,
        title: "Brake System Check",
        subtitle: "Make You Feel Safety",
        bg: "bg-cyan-900",
        icon: BrakeCanvassIcon,
        iconType: "svg",
        subtitleColor: "text-cyan-600",
    },
];

export default function QuickServices() {
    return (
        <View className="mt-1 rounded-3xl bg-white p-5 shadow-lg">
            {/* Header */}
            <Text className="mb-5 text-2xl font-semibold text-gray-800 font-winskyBold">
                Quick Services
            </Text>

            {/* Grid 2 x 2 */}
            <View className="flex-row flex-wrap justify-between">
                {services.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <TouchableOpacity
                            key={item.id}
                            className="mb-4 w-[48%] rounded-2xl bg-gray-50 p-4 items-center"
                            activeOpacity={0.7}
                        >
                            {/* Icon box */}
                            <View
                                className={`mb-3 h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                            >
                                {/* Render as component, bukan Image */}
                                <IconComponent color="white" size={28} />
                            </View>

                            {/* Text */}
                            <Text className="text-base font-semibold text-gray-900">
                                {item.title}
                            </Text>
                            <Text className={`mt-0.5 text-xs font-medium ${item.subtitleColor}`}>
                                {item.subtitle}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
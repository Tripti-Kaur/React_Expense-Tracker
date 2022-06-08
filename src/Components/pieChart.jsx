import React from 'react'
import { useState } from "react";
import {Pie} from "@visx/shape"
import {Group} from "@visx/group"
import {Text} from "@visx/text"

const coins = [
    {symbol: "ADA", amount: 200}
]

export default function pieChart() {
    const width = 400;
    const half = width/2;
  return (
        <svg width= {width} height={width}>
            <Group top={half} left={half} >
                <Pie data={coins}></Pie>
            </Group>
        </svg>
    );
}

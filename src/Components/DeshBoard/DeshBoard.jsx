import React from 'react';
import { PieChart,Tooltip, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



function DeshBoard() {

    const MarkArray = [
        {
            id: 1,
            name: "Student 1",
            marks: 79,
            mark1: 74
        },
        {
            id: 2,
            name: "Student 2",
            marks: 33,
            mark1: 79
        },
        {
            id: 3,
            name: "Student 3",
            marks: 88,
            mark1: 71
        },
        {
            id: 4,
            name: "Student 4",
            marks: 77,
            mark1: 14
        },
        {
            id: 5,
            name: "Student 5",
            marks: 91,
            mark1: 33
        }
    ]




    return (
        <div>
            <PieChart width={1000} height={400}>
                <Pie dataKey= "marks" data={MarkArray} cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="red"
                    label>

                </Pie>
                <Tooltip/>
            </PieChart>
        </div>
    );
}

export default DeshBoard;
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

import { useEffect, useState } from "react";
import { getDonation } from "../../Components/local/local";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontWeight: "700", fontSize: "20px" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function App() {
  const [totalDonation, setTotalDonation] = useState(0);
  const [allDonation,setAllDonation] = useState()
  
  const data = [
    { name: "Total Donation", value: allDonation },
    { name: "Your Donation", value: totalDonation },
  ];

 

  useEffect(()=>{

      fetch('/Donation.json')
      .then(res=>res.json())
      .then(data => setAllDonation(data.length))

  },[])

  useEffect(() => {
    const datas = getDonation();
    
    setTotalDonation(datas);
  }, [totalDonation]);

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={250}
        cy={250}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}

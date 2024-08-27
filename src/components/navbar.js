export default function Navbar(){
    const data=[
        {id:1,username:"arun",age:21},
        {id:2,username:"asraf",age:20},
        {id:3,username:"boopathi",age:23},
        {id:4,username:"kavi",age:25}
    ];
    return(

        <div>
            <h3>i am navbar</h3>
            {data.map((d)=><li key={d.id}>{d.username} {d.age}</li>)}
        </div>
)
}
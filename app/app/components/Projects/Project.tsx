type project = {
    name:         string,
    desc:         string,
    project_url:  string,
    img_url:      string
}

export default function Project(props: project) {
  return (
    <div>
        <a href={props.img_url} target="_blank">
            <img src={props.img_url} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
        </a>


    </div>
  )
}

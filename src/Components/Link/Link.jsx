

const Link = (props) => {
    
    const {name,path}=props.route
    return (
        <div>
              <li className="mr-10">
                    <a href={path}>{name}</a>
              </li>
        </div>
    );
};

export default Link;
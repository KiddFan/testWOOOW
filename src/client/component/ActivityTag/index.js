"use strict";
var React = require('react')

export default class ActivityTag extends React.Component  {
     constructor(props) {
        super(props)
        this.clickTag = this.clickTag.bind(this)
    }

    clickTag(name) {
        if(this.props.roomId) {
            location.href = '/search/'+this.props.roomId+'/all/'+name
        } else {
            location.href = '/search/all/'+name
        }
    }

    render() {
        return (
            <div className="tags-field">
            {
                this.props.tag.map((element, index) => {
                    return (
                        <span className="tags-field__tag tags-field__tag--second" key={'ActivityTag_'+element}>
                            <span onClick={() => {this.clickTag(element)}}>{element}</span>
                        </span>
                    )
                })
            }
            </div>
        )
    }
}

ActivityTag.propTypes = {
    tag : PropTypes.array.isRequired, //video Link
}




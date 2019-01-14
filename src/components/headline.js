import React from 'react'
import Proptypes from  'Prop-types'


headline.Proptypes = {
    imageSource: Proptypes.node.isRequired,
    title: Proptypes.string.isRequired
}

headline.defaultProps = {
    children: undefined
}

export default headline;
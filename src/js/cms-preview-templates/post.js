import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));
    const tags = entry.getIn(["data", "tags"]);
    const cats = entry.getIn(["data", "categories"]);

    return (
      <div className="mw6 center ph3 pv4">
        <h1 className="f2 lh-title b mb3">{entry.getIn(["data", "title"])}</h1>
        <div className="flex justify-between grey-3">
          <div
            style={{
              width: "80px",
              height: "80px"
            }}
          />
          <p>{format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY")}</p>
          <p>Read in x minutes</p>
        </div>
        <ul id="taxonomy">
          {tags.map((tag) => (
            <span className="tag">
              <a href={`/tags/${tag}`}>{tag}</a>
            </span>
          ))}
          {cats.map((cat) => (
            <span className="category">
              <a href={`/categories/${cat}`}>{cat}</a>
            </span>
          ))}
        </ul>
        <div className="cms mw6">
          <p>{entry.getIn(["data", "description"])}</p>
          {image && <img src={image} alt={entry.getIn(["data", "title"])} />}
          {widgetFor("body")}
        </div>
      </div>
    );
  }
}

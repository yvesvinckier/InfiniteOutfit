import React from "react";
import Downshift, { resetIdCounter } from "downshift";
import Router from "next/router";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropDown";

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`;

function routeToItem(item) {
  Router.push({
    pathname: "/item",
    query: {
      id: item.id
    }
  });
}

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false
  };
  onChange = debounce(async (e, client) => {
    console.log("Searching...");
    // turn loading on
    this.setState({ loading: true });
    // Manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value }
    });
    this.setState({
      items: res.data.items,
      loading: false
    });
  }, 350);
  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift
          onChange={routeToItem}
          itemToString={item => (item === null ? "" : item.title)}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex
          }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <>
                    {/* <svg viewBox="0 0 14.925 15.251">
                      <path
                        d="M14.925,14.402l-4.085-4.085c0.974-1.096,1.571-2.534,1.571-4.112C12.411,2.784,9.627,0,6.205,0
	C2.784,0,0,2.784,0,6.205s2.784,6.205,6.205,6.205c1.412,0,2.711-0.479,3.755-1.276l4.117,4.117L14.925,14.402z M1.2,6.205
	C1.2,3.445,3.445,1.2,6.205,1.2c2.76,0,5.005,2.245,5.005,5.005S8.965,11.21,6.205,11.21C3.445,11.21,1.2,8.965,1.2,6.205z"
                      />
                    </svg> */}
                    <input
                      {...getInputProps({
                        type: "search",
                        placeholder: "Search For An Item",
                        id: "search",
                        className: this.state.loading ? "loading" : "",
                        onChange: e => {
                          e.persist();
                          this.onChange(e, client);
                        }
                      })}
                    />
                  </>
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img width="50" src={item.image} alt={item.title} />
                      {item.title}
                    </DropDownItem>
                  ))}
                  {!this.state.items.length && !this.state.loading && (
                    <DropDownItem> Nothing Found {inputValue}</DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;

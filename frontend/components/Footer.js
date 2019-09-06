import React from "react";
import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 60px;
  background-color: rgb(250, 250, 250);
  border-top: 1px solid rgb(241, 241, 241);
`;

const FooterOuter = styled.section`
  max-width: ${props => props.theme.maxWidth};
  padding: 4em 1em;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 4em 2em;
  }
`;

const FooterInner = styled.div`
  padding: 2em 0 0 0;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const FooterInfo = styled.div``;

const FooterSitemap = styled.div`
  ul {
    text-align: left;
    margin: 2em 0 0 0;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin: 0;
      text-align: right;
    }
    li {
      display: inline-block;
      padding-left: 5px;
      margin: 0 1em 0.5em 0;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        margin: 0 0 0.5em 1em;
      }
    }
    .iconLink {
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 32px;
        border: 2px solid ${props => props.theme.black};
        border-radius: 100%;
      }
      svg {
        width: 14px;
      }
    }
    .icon {
      fill: ${props => props.theme.black};
      display: inline-block;
      height: 3rem;
      width: 3rem;
    }
  }
`;

const Logo = styled.h1`
  position: relative;
  z-index: 2;
  a {
    color: white;
    text-decoration: none;
    svg {
      height: 32px;
      fill: ${props => props.theme.black};
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterOuter>
        <FooterInner>
          <FooterInfo>
            <Logo>
              <Link href="/">
                <a>
                  <svg version="1.1" viewBox="0 0 315.609 46.388">
                    <g>
                      <path d="M80.678,9.123v28.319h-4.273V9.123H80.678z" />
                      <path
                        d="M88.196,19.578h4.145v1.65c1.443-1.431,3.069-2.146,4.879-2.146c2.079,0,3.699,0.654,4.86,1.962
  c1.002,1.113,1.504,2.929,1.504,5.447v10.95h-4.145v-9.978c0-1.761-0.245-2.978-0.734-3.65c-0.477-0.685-1.345-1.026-2.604-1.026
  c-1.37,0-2.342,0.452-2.917,1.356c-0.562,0.894-0.844,2.452-0.844,4.678v8.62h-4.145L88.196,19.578L88.196,19.578z"
                      />
                      <path
                        d="M114.569,23.429v14.013h-4.145V23.429h-1.467v-3.852h1.467v-6.896c0-2.25,0.391-3.839,1.174-4.769
  c1.076-1.296,2.641-1.944,4.695-1.944c0.734,0,1.657,0.214,2.77,0.642v4.219l-0.422-0.22c-0.893-0.452-1.626-0.679-2.201-0.679
  c-0.733,0-1.229,0.263-1.485,0.788c-0.257,0.514-0.385,1.505-0.385,2.972v5.888h4.494v3.852L114.569,23.429L114.569,23.429z"
                      />
                      <path
                        d="M123.115,12.149c0-0.721,0.263-1.345,0.789-1.87c0.525-0.526,1.155-0.789,1.889-0.789
  c0.746,0,1.382,0.263,1.908,0.789c0.525,0.514,0.789,1.144,0.789,1.889c0,0.746-0.263,1.382-0.789,1.907
  c-0.514,0.526-1.144,0.789-1.889,0.789c-0.746,0-1.382-0.263-1.908-0.789C123.378,13.55,123.115,12.908,123.115,12.149z
   M127.866,19.578v17.864h-4.127V19.578H127.866z"
                      />
                      <path
                        d="M134.595,19.578h4.145v1.65c1.443-1.431,3.069-2.146,4.879-2.146c2.079,0,3.699,0.654,4.86,1.962
  c1.002,1.113,1.504,2.929,1.504,5.447v10.95h-4.145v-9.978c0-1.761-0.245-2.978-0.734-3.65c-0.477-0.685-1.345-1.026-2.604-1.026
  c-1.37,0-2.342,0.452-2.917,1.356c-0.562,0.894-0.844,2.452-0.844,4.678v8.62h-4.145V19.578H134.595z"
                      />
                      <path
                        d="M156.071,12.149c0-0.721,0.263-1.345,0.789-1.87c0.525-0.526,1.155-0.789,1.889-0.789
  c0.746,0,1.382,0.263,1.908,0.789c0.525,0.514,0.789,1.144,0.789,1.889c0,0.746-0.263,1.382-0.789,1.907
  c-0.514,0.526-1.144,0.789-1.889,0.789c-0.746,0-1.382-0.263-1.908-0.789C156.334,13.55,156.071,12.908,156.071,12.149z
   M160.822,19.578v17.864h-4.127V19.578H160.822z"
                      />
                      <path d="M171.807,23.429v14.013h-4.127V23.429h-1.761v-3.852h1.761v-6.548h4.127v6.548h3.209v3.852H171.807z" />
                      <path
                        d="M195.924,29.482h-12.802c0.11,1.467,0.587,2.635,1.431,3.503c0.844,0.856,1.926,1.284,3.247,1.284
  c1.027,0,1.877-0.245,2.549-0.733c0.66-0.489,1.412-1.395,2.256-2.715l3.485,1.944c-0.538,0.917-1.106,1.702-1.706,2.356
  s-1.241,1.192-1.926,1.614c-0.685,0.422-1.425,0.73-2.219,0.926c-0.795,0.196-1.657,0.294-2.586,0.294
  c-2.666,0-4.805-0.855-6.419-2.568c-1.614-1.724-2.421-4.01-2.421-6.859c0-2.824,0.782-5.11,2.348-6.859
  c1.577-1.724,3.668-2.586,6.273-2.586c2.628,0,4.707,0.838,6.236,2.513c1.516,1.663,2.274,3.968,2.274,6.914L195.924,29.482z
   M191.687,26.107c-0.575-2.201-1.962-3.302-4.164-3.302c-0.501,0-0.972,0.077-1.412,0.229c-0.44,0.153-0.841,0.373-1.201,0.66
  c-0.361,0.288-0.669,0.633-0.926,1.036c-0.257,0.404-0.453,0.862-0.587,1.376h8.29L191.687,26.107L191.687,26.107z"
                      />
                      <path
                        d="M214.409,23.154c0-3.985,1.461-7.409,4.383-10.271c2.91-2.861,6.407-4.292,10.491-4.292
  c4.035,0,7.496,1.442,10.381,4.328c2.898,2.886,4.347,6.353,4.347,10.399c0,4.072-1.455,7.526-4.365,10.363
  c-2.922,2.849-6.45,4.273-10.583,4.273c-3.656,0-6.939-1.266-9.85-3.797C216.011,31.359,214.409,27.691,214.409,23.154z
   M218.719,23.21c0,3.13,1.051,5.704,3.155,7.722c2.091,2.018,4.505,3.026,7.245,3.026c2.971,0,5.478-1.027,7.52-3.082
  c2.042-2.078,3.063-4.609,3.063-7.593c0-3.021-1.009-5.552-3.026-7.594c-2.005-2.054-4.487-3.081-7.446-3.081
  c-2.947,0-5.436,1.027-7.465,3.081C219.734,17.72,218.719,20.226,218.719,23.21z"
                      />
                      <path
                        d="M254.227,19.578v10.253c0,2.959,1.167,4.438,3.503,4.438c2.335,0,3.503-1.479,3.503-4.438V19.578h4.127v10.345
  c0,1.431-0.178,2.665-0.532,3.704c-0.342,0.93-0.935,1.768-1.778,2.514c-1.395,1.21-3.167,1.815-5.319,1.815
  c-2.14,0-3.906-0.605-5.301-1.815c-0.855-0.746-1.461-1.584-1.815-2.514c-0.343-0.831-0.514-2.065-0.514-3.704V19.578H254.227z"
                      />
                      <path d="M276.326,23.429v14.013h-4.127V23.429h-1.761v-3.852h1.761v-6.548h4.127v6.548h3.21v3.852H276.326z" />
                      <path
                        d="M288.118,23.429v14.013h-4.146V23.429h-1.467v-3.852h1.467v-6.896c0-2.25,0.392-3.839,1.174-4.769
  c1.076-1.296,2.642-1.944,4.695-1.944c0.734,0,1.657,0.214,2.77,0.642v4.219l-0.421-0.22c-0.894-0.452-1.627-0.679-2.201-0.679
  c-0.734,0-1.229,0.263-1.486,0.788c-0.256,0.514-0.385,1.505-0.385,2.972v5.888h4.493v3.852L288.118,23.429L288.118,23.429z"
                      />
                      <path
                        d="M296.663,12.149c0-0.721,0.263-1.345,0.789-1.87c0.525-0.526,1.155-0.789,1.889-0.789
  c0.746,0,1.382,0.263,1.908,0.789c0.525,0.514,0.788,1.144,0.788,1.889c0,0.746-0.263,1.382-0.788,1.907
  c-0.514,0.526-1.144,0.789-1.89,0.789s-1.382-0.263-1.907-0.789C296.926,13.55,296.663,12.908,296.663,12.149z M301.414,19.578
  v17.864h-4.127V19.578H301.414z"
                      />
                      <path d="M312.399,23.429v14.013h-4.127V23.429h-1.761v-3.852h1.761v-6.548h4.127v6.548h3.21v3.852H312.399z" />
                    </g>
                    <path
                      d="M23.194,0C10.384,0,0,10.384,0,23.194s10.384,23.194,23.194,23.194s23.194-10.384,23.194-23.194
S36.004,0,23.194,0z M35.08,25.401c-0.297,0.719-0.719,1.388-1.289,1.934c-0.57,0.57-1.215,0.992-1.933,1.289
c-0.694,0.297-1.438,0.421-2.206,0.421s-1.512-0.149-2.206-0.421c-0.719-0.297-1.388-0.719-1.933-1.289l-4.189-4.14l-2.281-2.281
c-0.62-0.62-1.438-0.942-2.305-0.942s-1.686,0.347-2.281,0.942c-0.62,0.595-0.942,1.413-0.942,2.281s0.347,1.686,0.942,2.281
c0.62,0.62,1.413,0.942,2.281,0.942s1.686-0.347,2.281-0.942l0.397-0.397l1.859,1.859l-0.397,0.397
c-0.57,0.57-1.215,0.992-1.933,1.289c-0.694,0.297-1.438,0.421-2.206,0.421s-1.512-0.149-2.206-0.421
c-0.719-0.297-1.388-0.719-1.933-1.289c-0.57-0.57-0.992-1.215-1.289-1.934c-0.297-0.694-0.421-1.438-0.421-2.206
s0.149-1.512,0.421-2.206c0.297-0.719,0.719-1.388,1.289-1.933c0.57-0.57,1.215-0.992,1.933-1.289
c0.694-0.297,1.438-0.421,2.206-0.421c0.768,0,1.512,0.149,2.206,0.421c0.719,0.297,1.388,0.719,1.933,1.289l5.528,5.503
l0.917,0.917c0.62,0.62,1.413,0.942,2.281,0.942s1.686-0.347,2.281-0.942c0.62-0.62,0.942-1.413,0.942-2.281
s-0.347-1.686-0.942-2.281c-0.595-0.62-1.388-0.942-2.256-0.942s-1.686,0.347-2.281,0.942l-0.473,0.471l-1.859-1.859l0.471-0.471
c0.57-0.57,1.215-0.992,1.934-1.289c0.694-0.297,1.438-0.421,2.206-0.421s1.512,0.149,2.206,0.421
c0.719,0.297,1.388,0.719,1.933,1.289c0.57,0.57,0.992,1.215,1.289,1.933c0.297,0.694,0.446,1.438,0.446,2.206
S35.353,24.707,35.08,25.401z"
                    />
                  </svg>
                </a>
              </Link>
            </Logo>
            <p>&copy; {new Date().getFullYear()} Infinite Outfit. </p>
          </FooterInfo>
          <FooterSitemap>
            <ul>
              <li>
                <Link href="/">
                  <a>Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/sell">
                  <a>Sell</a>
                </Link>
              </li>
              <li>
                <Link href="/orders">
                  <a>Orders</a>
                </Link>
              </li>
              <li>
                <Link href="/me">
                  <a>Account</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="iconLink"
                >
                  <span>
                    <svg className="icon" viewBox="0 0 32 32">
                      <path d="M22.4142025,16.0127711 L17.890233,16.0127711 C17.890233,23.1790387 17.890233,32 17.890233,32 L11.1866039,32 C11.1866039,32 11.1866039,23.2645496 11.1866039,16.0127711 L8,16.0127711 L8,10.3623807 L11.1866039,10.3623807 L11.1866039,6.70761756 C11.1866039,4.09009197 12.4410842,0 17.9518369,0 L22.9193548,0.018879056 L22.9193548,5.50380011 C22.9193548,5.50380011 19.9007616,5.50380011 19.3138441,5.50380011 C18.7269265,5.50380011 17.8924731,5.79475968 17.8924731,7.04299844 L17.8924731,10.3634912 L23,10.3634912 L22.4142025,16.0127711 Z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="iconLink"
                >
                  <span>
                    <svg className="icon" viewBox="0 0 32 32">
                      <path d="M16.0000318,0 C11.654661,0 11.1097907,0.0184185106 9.40322048,0.0962843354 C7.70020702,0.17395964 6.53710989,0.444457676 5.51939203,0.840011024 C4.46725051,1.24883842 3.57496907,1.79593165 2.6854186,2.68541861 C1.79593165,3.57496908 1.24883842,4.46725047 0.840011042,5.519392 C0.444457675,6.53710986 0.17395964,7.70020699 0.0962843353,9.40322045 C0.0184185106,11.1097906 0,11.6546609 0,16.0000318 C0,20.345339 0.0184185106,20.8902093 0.0962843353,22.5967795 C0.17395964,24.299793 0.444457675,25.4628901 0.840011042,26.480608 C1.24883842,27.5327495 1.79593165,28.425031 2.6854186,29.3145814 C3.57496907,30.2040684 4.46725051,30.7511616 5.51939203,31.1600524 C6.53710989,31.5555424 7.70020702,31.8260403 9.40322048,31.9037156 C11.1097907,31.9815816 11.654661,32 16.0000318,32 C20.345339,32 20.8902093,31.9815816 22.5967795,31.9037156 C24.299793,31.8260403 25.4628901,31.5555424 26.480608,31.1600524 C27.5327493,30.7511616 28.4250308,30.2040684 29.3145814,29.3145814 C30.2040682,28.425031 30.7511616,27.5327495 31.1600524,26.480608 C31.5555424,25.4628901 31.8260403,24.299793 31.9037156,22.5967795 C31.9815814,20.8902093 32,20.345339 32,16.0000318 C32,11.6546609 31.9815814,11.1097906 31.9037156,9.40322045 C31.8260403,7.70020699 31.5555424,6.53710986 31.1600524,5.519392 C30.7511616,4.46725047 30.2040682,3.57496908 29.3145814,2.68541861 C28.4250308,1.79593165 27.5327493,1.24883842 26.480608,0.840011024 C25.4628901,0.444457676 24.299793,0.17395964 22.5967795,0.0962843354 C20.8902093,0.0184185106 20.345339,0 16.0000318,0 Z M16.0000318,2.88287774 C20.2721732,2.88287774 20.7782376,2.89920035 22.4653731,2.97617701 C24.0253572,3.04731055 24.8725451,3.30796422 25.4363419,3.52708097 C26.1831807,3.81733126 26.7161743,4.16404382 27.2760335,4.72396646 C27.8359561,5.28382568 28.1826687,5.81681923 28.4729191,6.56365804 C28.6920358,7.1274549 28.9526894,7.97464277 29.0238229,9.53462691 C29.1007996,11.2217624 29.1171223,11.7278268 29.1171223,16.0000318 C29.1171223,20.2721731 29.1007996,20.7782376 29.0238229,22.4653731 C28.9526894,24.0253572 28.6920358,24.8725451 28.4729191,25.4363419 C28.1826687,26.1831807 27.8359561,26.7161743 27.2760335,27.2760335 C26.7161743,27.8359561 26.1831807,28.1826687 25.4363419,28.4729191 C24.8725451,28.6920358 24.0253572,28.9526894 22.4653731,29.0238231 C20.7784917,29.1007996 20.2724907,29.1171223 16.0000318,29.1171223 C11.7275093,29.1171223 11.2215719,29.1007996 9.53462694,29.0238231 C7.9746428,28.9526894 7.12745493,28.6920358 6.56365787,28.4729191 C5.81681926,28.1826687 5.28382571,27.8359561 4.72396649,27.2760335 C4.16410727,26.7161743 3.81733125,26.1831807 3.52708097,25.4363419 C3.30796422,24.8725451 3.04731055,24.0253572 2.97617701,22.4653731 C2.89920035,20.7782376 2.88287774,20.2721731 2.88287774,16.0000318 C2.88287774,11.7278268 2.89920035,11.2217624 2.97617701,9.53462691 C3.04731055,7.97464277 3.30796422,7.1274549 3.52708097,6.56365804 C3.81733125,5.81681923 4.16404385,5.28382568 4.72396649,4.72396646 C5.28382571,4.16404382 5.81681926,3.81733126 6.56365787,3.52708097 C7.12745493,3.30796422 7.9746428,3.04731055 9.53462694,2.97617701 C11.2217624,2.89920035 11.7278268,2.88287774 16.0000318,2.88287774 Z"></path>
                      <path
                        fill="currentFill"
                        d="M16.000031,21.1929857 C13.1319798,21.1929857 10.8070143,18.8680202 10.8070143,16.000031 C10.8070143,13.1319798 13.1319798,10.8070143 16.000031,10.8070143 C18.8680202,10.8070143 21.1929857,13.1319798 21.1929857,16.000031 C21.1929857,18.8680202 18.8680202,21.1929857 16.000031,21.1929857 Z M16.000031,8 C11.5816935,8 8,11.5816935 8,16.000031 C8,20.4183065 11.5816935,24 16.000031,24 C20.4183063,24 24,20.4183065 24,16.000031 C24,11.5816935 20.4183063,8 16.000031,8 Z"
                      ></path>
                      <path
                        fill="currentFill"
                        d="M27,8.00003303 C27,9.10461291 26.1045466,10 24.999967,10 C23.8954534,10 23,9.10461291 23,8.00003303 C23,6.89545336 23.8954534,6 24.999967,6 C26.1045466,6 27,6.89545336 27,8.00003303"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="iconLink"
                >
                  <span>
                    <svg className="icon" viewBox="0 0 512 512">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </FooterSitemap>
        </FooterInner>
      </FooterOuter>
    </FooterContainer>
  );
};

export default Footer;
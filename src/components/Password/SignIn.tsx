import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="text-center">
        <h1 className="main-title">Welcome back</h1>
        <p className="main-paragraph">Sign in to your account to continue</p>
      </div>
      <div className="flex items-center gap-[12px] justify-center pb-[32px] border-b-2 border-[#F7F5FD] relative">
        <div className="flex items-center relative w-full ">
          <div className="icon-Input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none">
              <path
                d="M28.5 16.0004C28.5001 18.8259 27.5032 21.5609 25.6849 23.7236C23.8665 25.8863 21.3433 27.3379 18.5597 27.8229C15.7761 28.3079 12.9106 27.7951 10.468 26.3748C8.02539 24.9545 6.16229 22.7178 5.20686 20.0587C4.25142 17.3996 4.26495 14.4886 5.24505 11.8385C6.22516 9.18842 8.10897 6.96916 10.5647 5.57162C13.0204 4.17408 15.8905 3.68791 18.6695 4.19874C21.4485 4.70957 23.9581 6.18464 25.7563 8.36413C25.8455 8.46457 25.9136 8.58198 25.9565 8.70934C25.9994 8.8367 26.0162 8.9714 26.0058 9.10538C25.9955 9.23937 25.9582 9.36989 25.8963 9.48917C25.8344 9.60844 25.7491 9.714 25.6455 9.79956C25.5418 9.88512 25.422 9.94891 25.2932 9.98713C25.1643 10.0254 25.0291 10.0372 24.8956 10.022C24.7621 10.0068 24.633 9.96483 24.5161 9.89861C24.3991 9.8324 24.2967 9.7433 24.215 9.63663C22.7442 7.85327 20.701 6.63455 18.433 6.18777C16.165 5.74099 13.8122 6.09376 11.775 7.18606C9.73769 8.27837 8.14178 10.0427 7.2587 12.179C6.37562 14.3153 6.25992 16.6916 6.93128 18.9035C7.60265 21.1155 9.01961 23.0266 10.9411 24.3116C12.8626 25.5967 15.17 26.1763 17.4707 25.952C19.7714 25.7277 21.9233 24.7132 23.5604 23.0812C25.1975 21.4492 26.2186 19.3004 26.45 17.0004H16.5C16.2348 17.0004 15.9804 16.895 15.7929 16.7075C15.6054 16.5199 15.5 16.2656 15.5 16.0004C15.5 15.7352 15.6054 15.4808 15.7929 15.2933C15.9804 15.1057 16.2348 15.0004 16.5 15.0004H27.5C27.7652 15.0004 28.0196 15.1057 28.2071 15.2933C28.3946 15.4808 28.5 15.7352 28.5 16.0004Z"
                fill="black"
              />
            </svg>
          </div>
          <button className="border-[0.8px] border-black rounded-lg pl-[12px] w-full h-[60px] text-[18px]">
            Google
          </button>
        </div>
        <div className="flex items-center relative w-full ">
          <div className="icon-Input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none">
              <path
                d="M15.25 16C15.25 15.2583 15.0301 14.5333 14.618 13.9166C14.206 13.2999 13.6203 12.8193 12.9351 12.5355C12.2498 12.2516 11.4958 12.1774 10.7684 12.3221C10.041 12.4667 9.3728 12.8239 8.84835 13.3483C8.3239 13.8728 7.96675 14.541 7.82206 15.2684C7.67736 15.9958 7.75162 16.7498 8.03545 17.4351C8.31928 18.1203 8.79993 18.706 9.41661 19.118C10.0333 19.5301 10.7583 19.75 11.5 19.75C12.4946 19.75 13.4484 19.3549 14.1517 18.6517C14.8549 17.9484 15.25 16.9946 15.25 16ZM9.25 16C9.25 15.555 9.38196 15.12 9.62919 14.75C9.87643 14.38 10.2278 14.0916 10.639 13.9213C11.0501 13.751 11.5025 13.7064 11.939 13.7932C12.3754 13.88 12.7763 14.0943 13.091 14.409C13.4057 14.7237 13.62 15.1246 13.7068 15.561C13.7936 15.9975 13.749 16.4499 13.5787 16.861C13.4084 17.2722 13.12 17.6236 12.75 17.8708C12.38 18.118 11.945 18.25 11.5 18.25C10.9033 18.25 10.331 18.0129 9.90901 17.591C9.48705 17.169 9.25 16.5967 9.25 16ZM27.5 13.25H26.25V6C26.25 5.53587 26.0656 5.09075 25.7374 4.76256C25.4092 4.43437 24.9641 4.25 24.5 4.25H14.5C14.0359 4.25 13.5908 4.43437 13.2626 4.76256C12.9344 5.09075 12.75 5.53587 12.75 6V8.25H5.5C5.03587 8.25 4.59075 8.43437 4.26256 8.76256C3.93437 9.09075 3.75 9.53587 3.75 10V22C3.75 22.4641 3.93437 22.9092 4.26256 23.2374C4.59075 23.5656 5.03587 23.75 5.5 23.75H9.75V26C9.75 26.4641 9.93437 26.9092 10.2626 27.2374C10.5908 27.5656 11.0359 27.75 11.5 27.75H27.5C27.9641 27.75 28.4092 27.5656 28.7374 27.2374C29.0656 26.9092 29.25 26.4641 29.25 26V15C29.25 14.5359 29.0656 14.0908 28.7374 13.7626C28.4092 13.4344 27.9641 13.25 27.5 13.25ZM20.7812 20.5L27.75 15.4663V25.5338L20.7812 20.5ZM14.25 6C14.25 5.9337 14.2763 5.87011 14.3232 5.82322C14.3701 5.77634 14.4337 5.75 14.5 5.75H24.5C24.5663 5.75 24.6299 5.77634 24.6768 5.82322C24.7237 5.87011 24.75 5.9337 24.75 6V15.7837L19.5 19.575L19.25 19.3937V10C19.25 9.53587 19.0656 9.09075 18.7374 8.76256C18.4092 8.43437 17.9641 8.25 17.5 8.25H14.25V6ZM5.25 22V10C5.25 9.9337 5.27634 9.87011 5.32322 9.82322C5.37011 9.77634 5.4337 9.75 5.5 9.75H17.5C17.5663 9.75 17.6299 9.77634 17.6768 9.82322C17.7237 9.87011 17.75 9.9337 17.75 10V22C17.75 22.0663 17.7237 22.1299 17.6768 22.1768C17.6299 22.2237 17.5663 22.25 17.5 22.25H5.5C5.4337 22.25 5.37011 22.2237 5.32322 22.1768C5.27634 22.1299 5.25 22.0663 5.25 22ZM11.25 26V23.75H17.5C17.9641 23.75 18.4092 23.5656 18.7374 23.2374C19.0656 22.9092 19.25 22.4641 19.25 22V21.25L26.18 26.25H11.5C11.4337 26.25 11.3701 26.2237 11.3232 26.1768C11.2763 26.1299 11.25 26.0663 11.25 26Z"
                fill="black"
              />
            </svg>
          </div>
          <button className="border-[0.8px] border-black rounded-lg pl-[12px] w-full h-[60px] text-[18px]">
            Exchange
          </button>
        </div>
        <p className="bg-white absolute bottom-[-12px] left-[50%] translate-x-[-50%] w-[53px] text-center">
          OR
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label className="main-label ">Email</label>
          <div className="flex items-center relative ">
            <div className="icon-Input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none">
                <path
                  d="M18.75 0.5H0.75C0.551088 0.5 0.360322 0.579018 0.21967 0.71967C0.0790176 0.860322 0 1.05109 0 1.25V14C0 14.3978 0.158035 14.7794 0.43934 15.0607C0.720644 15.342 1.10218 15.5 1.5 15.5H18C18.3978 15.5 18.7794 15.342 19.0607 15.0607C19.342 14.7794 19.5 14.3978 19.5 14V1.25C19.5 1.05109 19.421 0.860322 19.2803 0.71967C19.1397 0.579018 18.9489 0.5 18.75 0.5ZM9.75 8.48281L2.67844 2H16.8216L9.75 8.48281ZM7.00406 8L1.5 13.0447V2.95531L7.00406 8ZM8.11406 9.01719L9.23906 10.0531C9.37743 10.1801 9.55842 10.2506 9.74625 10.2506C9.93408 10.2506 10.1151 10.1801 10.2534 10.0531L11.3784 9.01719L16.8159 14H2.67844L8.11406 9.01719ZM12.4959 8L18 2.95438V13.0456L12.4959 8Z"
                  fill="#F09272"
                />
              </svg>
            </div>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="primary-input"
            />
          </div>
        </div>
        <div>
          <label className="main-label ">Password</label>
          <div className="flex items-center relative ">
            <div className="icon-Input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none">
                <path
                  d="M7.55556 8.68518C7.02635 8.68536 6.51488 8.87597 6.11463 9.22218C5.71439 9.56839 5.45209 10.0471 5.37568 10.5707C5.29928 11.0944 5.41387 11.6281 5.69851 12.0742C5.98315 12.5203 6.41883 12.8491 6.92593 13.0005V14.3519C6.92593 14.5188 6.99226 14.679 7.11034 14.7971C7.22842 14.9151 7.38857 14.9815 7.55556 14.9815C7.72254 14.9815 7.88269 14.9151 8.00077 14.7971C8.11885 14.679 8.18518 14.5188 8.18518 14.3519V13.0005C8.69228 12.8491 9.12796 12.5203 9.4126 12.0742C9.69724 11.6281 9.81183 11.0944 9.73543 10.5707C9.65902 10.0471 9.39673 9.56839 8.99648 9.22218C8.59623 8.87597 8.08476 8.68536 7.55556 8.68518ZM7.55556 11.8333C7.36876 11.8333 7.18616 11.7779 7.03085 11.6742C6.87554 11.5704 6.75449 11.4229 6.683 11.2503C6.61152 11.0777 6.59282 10.8878 6.62926 10.7046C6.6657 10.5214 6.75565 10.3531 6.88773 10.2211C7.01981 10.089 7.1881 9.99903 7.3713 9.96259C7.55451 9.92615 7.7444 9.94485 7.91698 10.0163C8.08955 10.0878 8.23705 10.2089 8.34083 10.3642C8.44461 10.5195 8.5 10.7021 8.5 10.8889C8.5 11.1394 8.4005 11.3796 8.22338 11.5567C8.04626 11.7338 7.80604 11.8333 7.55556 11.8333ZM13.8519 6.16667H11.3333V4.27778C11.3333 3.27585 10.9353 2.31496 10.2268 1.60649C9.51838 0.898015 8.55748 0.5 7.55556 0.5C6.55363 0.5 5.59273 0.898015 4.88426 1.60649C4.17579 2.31496 3.77778 3.27585 3.77778 4.27778V6.16667H1.25926C0.925283 6.16667 0.604985 6.29934 0.368828 6.5355C0.132672 6.77165 0 7.09195 0 7.42593V16.2407C0 16.5747 0.132672 16.895 0.368828 17.1312C0.604985 17.3673 0.925283 17.5 1.25926 17.5H13.8519C14.1858 17.5 14.5061 17.3673 14.7423 17.1312C14.9784 16.895 15.1111 16.5747 15.1111 16.2407V7.42593C15.1111 7.09195 14.9784 6.77165 14.7423 6.5355C14.5061 6.29934 14.1858 6.16667 13.8519 6.16667ZM5.03704 4.27778C5.03704 3.60983 5.30238 2.96923 5.77469 2.49692C6.24701 2.0246 6.8876 1.75926 7.55556 1.75926C8.22351 1.75926 8.8641 2.0246 9.33642 2.49692C9.80873 2.96923 10.0741 3.60983 10.0741 4.27778V6.16667H5.03704V4.27778ZM13.8519 16.2407H1.25926V7.42593H13.8519V16.2407Z"
                  fill="#F09272"
                />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Min. 8 character"
              className="primary-input"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="font-bold">Remember me</label>
          </div>
          <a href="/resetpassword">Forgot password?</a>
        </div>
      </div>

      <Link to={'/welcome'} className="primary-button text-center">
        Sign in
      </Link>
      <p className="text-center">
        Don’t have an account?{' '}
        <a href="/" className="text-[#F09272] font-extrabold">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default SignIn;

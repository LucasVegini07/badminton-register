import theme from '@/styles/theme';

interface BikeIconProps {
  color: string;
}

export const BikeIcon: React.FC<BikeIconProps> = ({
  color = theme.colors.grey2,
}) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="inherit"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_425_16187)">
      <path
        d="M9.58339 7.90275C9.55948 7.99039 9.54035 8.07904 9.51477 8.1659C9.42142 8.47407 9.2335 8.73983 8.98123 8.92044C8.72897 9.10106 8.42702 9.18602 8.12395 9.16168C7.83909 9.13983 7.5679 9.023 7.34883 8.82777C7.12976 8.63254 6.97391 8.36881 6.90337 8.07394C6.8895 8.01815 6.87396 7.99523 6.81682 7.99523C5.76097 7.99709 4.70505 7.9976 3.64905 7.99675C3.6376 7.99726 3.62618 7.99845 3.61486 8.00032C3.43769 8.79817 2.78209 9.1976 2.20109 9.16398C1.7535 9.1385 1.12181 8.82619 0.929819 7.9965C0.858091 7.9965 0.783015 7.99803 0.708656 7.9965C0.551093 7.99268 0.438718 7.87422 0.438 7.70584C0.436566 7.3622 0.425089 7.01804 0.441826 6.6744C0.469322 6.11142 0.685225 5.63251 1.05774 5.23358C1.0806 5.21288 1.10455 5.19358 1.12946 5.17576C1.08499 5.162 1.06371 5.15461 1.04219 5.14875C0.846731 5.0947 0.67626 4.96705 0.562324 4.78941C0.448389 4.61178 0.398703 4.39618 0.422459 4.18252C0.446262 3.97208 0.540989 3.77802 0.689024 3.63641C0.837059 3.49481 1.02833 3.41531 1.22725 3.41269C2.06241 3.40938 2.89757 3.40658 3.73273 3.41422C4.31564 3.41983 4.82205 4.05107 4.75152 4.66729C4.72617 4.88662 4.60925 5.03412 4.35318 5.16149C4.39957 5.32885 4.44667 5.498 4.49353 5.66715C4.53657 5.82229 4.58224 5.97691 4.62121 6.13307C4.63651 6.19446 4.65803 6.2207 4.72282 6.21994C5.03588 6.21586 5.34901 6.21586 5.66223 6.21994C5.73396 6.21994 5.75308 6.19854 5.75261 6.12314C5.74974 5.61697 5.75428 5.11054 5.74998 4.60437C5.74367 4.24212 5.8516 3.88808 6.0565 3.59891C6.06654 3.58464 6.07515 3.56911 6.0883 3.54796C6.03283 3.54159 5.98572 3.53981 5.93982 3.53013C5.8774 3.51897 5.82077 3.48442 5.78014 3.43272C5.7395 3.38102 5.71753 3.31556 5.71818 3.24813C5.71602 3.13426 5.71818 3.02014 5.71818 2.89506H5.07884C4.96096 2.89506 4.8713 2.84182 4.81918 2.72795C4.79971 2.68662 4.79015 2.6408 4.79134 2.59458C4.79253 2.54835 4.80444 2.50316 4.82601 2.46303C4.84757 2.4229 4.87813 2.38908 4.91494 2.36459C4.95176 2.3401 4.99369 2.32569 5.03699 2.32266C5.22445 2.31145 5.41261 2.31807 5.60054 2.3168H5.71842C5.71842 2.20166 5.71842 2.09467 5.71842 1.98767C5.71842 1.79203 5.83007 1.67434 6.01442 1.67409C6.41705 1.67409 6.81969 1.67282 7.22232 1.67409C7.41786 1.67327 7.60798 1.74254 7.7621 1.87075C7.91622 1.99897 8.0254 2.17868 8.07207 2.38099C8.1189 2.58004 8.10235 2.79003 8.02502 2.97797C7.94768 3.16591 7.81394 3.32115 7.64481 3.41932C7.58623 3.45345 7.5769 3.48326 7.59077 3.55153C7.68641 4.01974 7.77806 4.48889 7.86573 4.95897C7.8827 5.05042 7.91355 5.08354 8.00297 5.07794C8.24152 5.05863 8.4811 5.09668 8.704 5.18926C9.21327 5.40808 9.56067 5.93692 9.56474 6.50295C9.56474 6.69579 9.50066 6.78775 9.34788 6.83233C9.41698 7.02415 9.48703 7.21801 9.55565 7.41212C9.56663 7.44749 9.57581 7.48346 9.58315 7.51988L9.58339 7.90275ZM1.19259 5.99628C1.63706 5.67225 2.09899 5.57315 2.59607 5.64703C3.00048 5.70835 3.3757 5.90644 3.66647 6.21211C3.95724 6.51778 4.14818 6.91487 4.21116 7.34487C4.22025 7.40627 4.23866 7.42359 4.2946 7.42359C5.13558 7.42206 5.97648 7.42206 6.8173 7.42359C6.8687 7.42359 6.88902 7.40576 6.90122 7.35226C6.9681 7.056 7.1233 6.79082 7.34354 6.59644C7.36336 6.58062 7.37917 6.55977 7.38952 6.5358C7.39987 6.51182 7.40445 6.48547 7.40284 6.45914C7.40021 6.12161 7.40284 5.78408 7.40117 5.4468C7.40082 5.40879 7.39697 5.37091 7.38969 5.33369C7.30999 4.92356 7.22973 4.5136 7.14892 4.10381C7.11377 3.92549 7.07719 3.74717 7.04061 3.56885C6.59398 3.68654 6.29153 4.0926 6.29033 4.56998C6.28866 5.10494 6.29033 5.63989 6.29033 6.17485C6.29033 6.54193 6.0553 6.79361 5.71339 6.79412C5.36766 6.79412 5.02177 6.79412 4.67572 6.79412C4.40411 6.79412 4.20231 6.63695 4.12341 6.35903C4.02012 5.99475 3.91915 5.62962 3.82048 5.26364C3.8035 5.20021 3.78007 5.17219 3.71193 5.17295C3.31838 5.17703 2.92459 5.17295 2.53104 5.17525C2.21919 5.17131 1.91367 5.26909 1.65547 5.45546C1.46134 5.59188 1.30224 5.77777 1.19259 5.99628ZM1.008 7.419H3.66722C3.59334 6.8252 3.05944 6.16772 2.23265 6.20007C1.6232 6.22401 1.0367 6.7954 1.008 7.419ZM8.22581 6.83106C8.11749 6.83046 8.01012 6.85266 7.90988 6.8964C7.80964 6.94014 7.7185 7.00455 7.64169 7.08593C7.56488 7.16732 7.50393 7.26407 7.46232 7.37062C7.42072 7.47718 7.39928 7.59145 7.39925 7.70686C7.39925 8.19087 7.77152 8.59081 8.22246 8.5903C8.67339 8.58979 9.04829 8.18628 9.04638 7.70584C9.04488 7.47442 8.95796 7.25292 8.80441 7.08923C8.65086 6.92553 8.44302 6.8328 8.22581 6.83106ZM4.20901 4.59826C4.21156 4.58488 4.21339 4.57136 4.21451 4.55775C4.21666 4.25207 3.95963 3.98739 3.65503 3.98637C3.06733 3.98459 2.47987 3.98637 1.89242 3.98637C1.67723 3.98637 1.46205 3.98382 1.24829 3.98637C1.03454 3.98892 0.897303 4.21105 0.98266 4.41383C1.03741 4.544 1.13759 4.59877 1.26957 4.59851C2.22404 4.59851 3.17843 4.59851 4.13274 4.59851L4.20901 4.59826ZM6.26331 2.9455C6.27359 2.95059 6.27885 2.95544 6.28411 2.95544C6.61144 2.95544 6.939 2.96359 7.26584 2.95009C7.34068 2.94677 7.42771 2.88436 7.4827 2.82271C7.57332 2.72082 7.58383 2.58886 7.52693 2.45869C7.46357 2.31349 7.34904 2.25006 7.20391 2.24904C6.90911 2.24726 6.61454 2.24904 6.31926 2.24904C6.30016 2.25053 6.28121 2.25368 6.2626 2.25846L6.26331 2.9455ZM1.50532 8.0021C1.59666 8.34498 1.95076 8.60431 2.29792 8.59005C2.63815 8.57578 2.97623 8.30983 3.03768 8.0021H1.50532ZM8.98302 6.26528C8.96078 6.2123 8.94716 6.17459 8.9297 6.13918C8.75994 5.79554 8.32407 5.57341 7.98288 5.65823C7.96782 5.6618 7.94559 5.68371 7.94535 5.69823C7.94296 5.8903 7.94367 6.08238 7.94367 6.26528H8.98302Z"
        fill={color}
      />
      <path
        d="M1.90554 2.00296C2.29862 2.00296 2.69193 2.00296 3.08524 2.00296C3.22391 2.00296 3.32433 2.08219 3.36211 2.21287C3.3795 2.2692 3.37907 2.33005 3.36089 2.38609C3.3427 2.44213 3.30778 2.49028 3.26145 2.52314C3.20628 2.5598 3.14304 2.58035 3.07807 2.58275C2.29463 2.58683 1.5112 2.58742 0.727762 2.58453C0.549158 2.58453 0.426501 2.45716 0.429371 2.28954C0.43224 2.12192 0.555613 2.00296 0.734695 2.00271C1.12522 2.00237 1.5155 2.00245 1.90554 2.00296Z"
        fill={color}
      />
      <path
        d="M2.8103 0.83369H3.99191C4.16693 0.83369 4.28528 0.948833 4.286 1.11798C4.28672 1.28713 4.16645 1.40635 3.99478 1.40635C3.20178 1.40635 2.4087 1.40635 1.61555 1.40635C1.44483 1.40635 1.32026 1.2856 1.31883 1.12104C1.31739 0.956475 1.44268 0.83369 1.61244 0.833435L2.8103 0.83369Z"
        fill={color}
      />
      <path
        d="M8.22127 7.9975C8.18547 7.99775 8.15 7.99033 8.11695 7.97567C8.08391 7.96102 8.05397 7.93943 8.02892 7.91219C8.00387 7.88495 7.98421 7.85262 7.97113 7.81712C7.95805 7.78163 7.9518 7.74369 7.95276 7.70557C7.95248 7.66822 7.95914 7.63118 7.97237 7.5966C7.98559 7.56201 8.00512 7.53055 8.02982 7.50405C8.05451 7.47755 8.08389 7.45652 8.11626 7.44218C8.14863 7.42784 8.18334 7.42048 8.2184 7.42051C8.25415 7.41948 8.28974 7.42615 8.32302 7.44012C8.3563 7.45408 8.38659 7.47506 8.41209 7.50179C8.43758 7.52853 8.45775 7.56047 8.47138 7.5957C8.48502 7.63093 8.49184 7.66873 8.49144 7.70684C8.49215 7.74498 8.48566 7.78288 8.47237 7.8183C8.45907 7.85372 8.43924 7.88594 8.41404 7.91304C8.38885 7.94015 8.35881 7.96159 8.32569 7.9761C8.29258 7.9906 8.25707 7.99788 8.22127 7.9975Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_425_16187">
        <rect
          width="10"
          height="10"
          fill="white"
          transform="translate(0 0.00012207)"
        />
      </clipPath>
    </defs>
  </svg>
);

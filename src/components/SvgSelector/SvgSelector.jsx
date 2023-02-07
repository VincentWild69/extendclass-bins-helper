const SvgSelector = ({id, className = ''}) => {

  switch (id) {
    case 'close-btn':
      return (
        <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M24 2.417L21.583 0 12 9.583 2.417 0 0 2.417 9.583 12 0 21.583 2.417 24 12 14.417 21.583 24 24 21.583 14.417 12 24 2.417z" fill="#54565f"></path></svg>
      );
    case 'information':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 4.92a1.56 1.56 0 110 3.12 1.56 1.56 0 010-3.12zm3.84 13.06a.5.5 0 01-.5.5h-6.2a.5.5 0 01-.5-.5v-.92a.5.5 0 01.5-.5h2.14v-5.28H9.86a.5.5 0 01-.5-.5v-.92a.5.5 0 01.5-.5h2.84a.5.5 0 01.5.5v6.7h2.14a.5.5 0 01.5.5v.92z" fill="#7b79ff"></path></svg>
      );
    case 'success':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm-1.438-11.066L16.158 7.5 18 9.245l-7.438 7.18-4.462-4.1 1.84-1.745 2.622 2.354z" fill="#40b62b"></path></svg>
      );
    case 'error':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm1.154 18.456h-2.308V16.15h2.308v2.307zm-.23-3.687h-1.847l-.346-9.23h2.538l-.346 9.23z" fill="#ee5e52"></path></svg>
      );
    case 'warning':
      return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm1.154 18.456h-2.308V16.15h2.308v2.307zm-.23-3.687h-1.847l-.346-9.23h2.538l-.346 9.23z" fill="#f38e08"></path></svg>
      );

    default:
      return <svg></svg>;
  }
}

export default SvgSelector;